/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp515Component } from './comp-515.component';

describe('Comp515Component', () => {
  let component: Comp515Component;
  let fixture: ComponentFixture<Comp515Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp515Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

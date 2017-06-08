/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp171Component } from './comp-171.component';

describe('Comp171Component', () => {
  let component: Comp171Component;
  let fixture: ComponentFixture<Comp171Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp171Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

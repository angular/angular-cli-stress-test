/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp876Component } from './comp-876.component';

describe('Comp876Component', () => {
  let component: Comp876Component;
  let fixture: ComponentFixture<Comp876Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp876Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

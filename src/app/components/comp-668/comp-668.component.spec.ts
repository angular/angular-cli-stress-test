/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp668Component } from './comp-668.component';

describe('Comp668Component', () => {
  let component: Comp668Component;
  let fixture: ComponentFixture<Comp668Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp668Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

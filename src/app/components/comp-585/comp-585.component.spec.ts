/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp585Component } from './comp-585.component';

describe('Comp585Component', () => {
  let component: Comp585Component;
  let fixture: ComponentFixture<Comp585Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp585Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

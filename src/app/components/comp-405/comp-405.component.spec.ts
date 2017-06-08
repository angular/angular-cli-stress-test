/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp405Component } from './comp-405.component';

describe('Comp405Component', () => {
  let component: Comp405Component;
  let fixture: ComponentFixture<Comp405Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp405Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

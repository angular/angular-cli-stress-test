/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2147Component } from './comp-2147.component';

describe('Comp2147Component', () => {
  let component: Comp2147Component;
  let fixture: ComponentFixture<Comp2147Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2147Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

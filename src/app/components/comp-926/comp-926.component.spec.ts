/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp926Component } from './comp-926.component';

describe('Comp926Component', () => {
  let component: Comp926Component;
  let fixture: ComponentFixture<Comp926Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp926Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp926Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

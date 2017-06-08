/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3256Component } from './comp-3256.component';

describe('Comp3256Component', () => {
  let component: Comp3256Component;
  let fixture: ComponentFixture<Comp3256Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3256Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

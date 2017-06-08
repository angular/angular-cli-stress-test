/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3694Component } from './comp-3694.component';

describe('Comp3694Component', () => {
  let component: Comp3694Component;
  let fixture: ComponentFixture<Comp3694Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3694Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

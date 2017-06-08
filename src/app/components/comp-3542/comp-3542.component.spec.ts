/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3542Component } from './comp-3542.component';

describe('Comp3542Component', () => {
  let component: Comp3542Component;
  let fixture: ComponentFixture<Comp3542Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3542Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

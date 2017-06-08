/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp549Component } from './comp-549.component';

describe('Comp549Component', () => {
  let component: Comp549Component;
  let fixture: ComponentFixture<Comp549Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp549Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp549Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

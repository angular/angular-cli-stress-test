/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3580Component } from './comp-3580.component';

describe('Comp3580Component', () => {
  let component: Comp3580Component;
  let fixture: ComponentFixture<Comp3580Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3580Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp580Component } from './comp-580.component';

describe('Comp580Component', () => {
  let component: Comp580Component;
  let fixture: ComponentFixture<Comp580Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp580Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

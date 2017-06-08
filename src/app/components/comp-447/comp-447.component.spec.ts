/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp447Component } from './comp-447.component';

describe('Comp447Component', () => {
  let component: Comp447Component;
  let fixture: ComponentFixture<Comp447Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp447Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3554Component } from './comp-3554.component';

describe('Comp3554Component', () => {
  let component: Comp3554Component;
  let fixture: ComponentFixture<Comp3554Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3554Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

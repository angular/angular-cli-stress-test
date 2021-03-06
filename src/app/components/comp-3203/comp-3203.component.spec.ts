/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3203Component } from './comp-3203.component';

describe('Comp3203Component', () => {
  let component: Comp3203Component;
  let fixture: ComponentFixture<Comp3203Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3203Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

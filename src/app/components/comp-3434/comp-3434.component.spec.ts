/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3434Component } from './comp-3434.component';

describe('Comp3434Component', () => {
  let component: Comp3434Component;
  let fixture: ComponentFixture<Comp3434Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3434Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

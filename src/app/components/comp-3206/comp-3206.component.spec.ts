/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3206Component } from './comp-3206.component';

describe('Comp3206Component', () => {
  let component: Comp3206Component;
  let fixture: ComponentFixture<Comp3206Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3206Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

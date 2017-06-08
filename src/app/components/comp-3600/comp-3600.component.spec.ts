/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3600Component } from './comp-3600.component';

describe('Comp3600Component', () => {
  let component: Comp3600Component;
  let fixture: ComponentFixture<Comp3600Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3600Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

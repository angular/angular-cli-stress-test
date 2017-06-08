/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3221Component } from './comp-3221.component';

describe('Comp3221Component', () => {
  let component: Comp3221Component;
  let fixture: ComponentFixture<Comp3221Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3221Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

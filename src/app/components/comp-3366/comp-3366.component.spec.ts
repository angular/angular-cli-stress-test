/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3366Component } from './comp-3366.component';

describe('Comp3366Component', () => {
  let component: Comp3366Component;
  let fixture: ComponentFixture<Comp3366Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3366Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

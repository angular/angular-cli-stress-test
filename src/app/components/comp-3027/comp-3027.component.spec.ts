/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3027Component } from './comp-3027.component';

describe('Comp3027Component', () => {
  let component: Comp3027Component;
  let fixture: ComponentFixture<Comp3027Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3027Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3027Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

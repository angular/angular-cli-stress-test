/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3012Component } from './comp-3012.component';

describe('Comp3012Component', () => {
  let component: Comp3012Component;
  let fixture: ComponentFixture<Comp3012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

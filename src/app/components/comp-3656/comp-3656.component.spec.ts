/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3656Component } from './comp-3656.component';

describe('Comp3656Component', () => {
  let component: Comp3656Component;
  let fixture: ComponentFixture<Comp3656Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3656Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

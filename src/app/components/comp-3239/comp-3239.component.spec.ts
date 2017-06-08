/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3239Component } from './comp-3239.component';

describe('Comp3239Component', () => {
  let component: Comp3239Component;
  let fixture: ComponentFixture<Comp3239Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3239Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

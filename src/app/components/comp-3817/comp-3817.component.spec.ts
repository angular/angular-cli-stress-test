/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3817Component } from './comp-3817.component';

describe('Comp3817Component', () => {
  let component: Comp3817Component;
  let fixture: ComponentFixture<Comp3817Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3817Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

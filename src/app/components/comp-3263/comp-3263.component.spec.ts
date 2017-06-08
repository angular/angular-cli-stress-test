/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3263Component } from './comp-3263.component';

describe('Comp3263Component', () => {
  let component: Comp3263Component;
  let fixture: ComponentFixture<Comp3263Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3263Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

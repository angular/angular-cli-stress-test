/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp742Component } from './comp-742.component';

describe('Comp742Component', () => {
  let component: Comp742Component;
  let fixture: ComponentFixture<Comp742Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp742Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

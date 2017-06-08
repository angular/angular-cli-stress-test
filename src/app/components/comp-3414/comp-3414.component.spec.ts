/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3414Component } from './comp-3414.component';

describe('Comp3414Component', () => {
  let component: Comp3414Component;
  let fixture: ComponentFixture<Comp3414Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3414Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

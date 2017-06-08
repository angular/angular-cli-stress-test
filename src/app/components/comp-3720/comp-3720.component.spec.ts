/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3720Component } from './comp-3720.component';

describe('Comp3720Component', () => {
  let component: Comp3720Component;
  let fixture: ComponentFixture<Comp3720Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3720Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

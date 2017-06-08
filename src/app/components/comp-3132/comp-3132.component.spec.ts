/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3132Component } from './comp-3132.component';

describe('Comp3132Component', () => {
  let component: Comp3132Component;
  let fixture: ComponentFixture<Comp3132Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3132Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

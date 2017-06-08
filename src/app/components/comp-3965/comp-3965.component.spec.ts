/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3965Component } from './comp-3965.component';

describe('Comp3965Component', () => {
  let component: Comp3965Component;
  let fixture: ComponentFixture<Comp3965Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3965Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

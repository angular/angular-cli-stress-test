/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3181Component } from './comp-3181.component';

describe('Comp3181Component', () => {
  let component: Comp3181Component;
  let fixture: ComponentFixture<Comp3181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3181Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

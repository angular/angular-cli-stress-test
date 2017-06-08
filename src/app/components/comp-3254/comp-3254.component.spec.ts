/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3254Component } from './comp-3254.component';

describe('Comp3254Component', () => {
  let component: Comp3254Component;
  let fixture: ComponentFixture<Comp3254Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3254Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

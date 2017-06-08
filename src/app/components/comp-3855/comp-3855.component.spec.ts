/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3855Component } from './comp-3855.component';

describe('Comp3855Component', () => {
  let component: Comp3855Component;
  let fixture: ComponentFixture<Comp3855Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3855Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

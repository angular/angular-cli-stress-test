/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3216Component } from './comp-3216.component';

describe('Comp3216Component', () => {
  let component: Comp3216Component;
  let fixture: ComponentFixture<Comp3216Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3216Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

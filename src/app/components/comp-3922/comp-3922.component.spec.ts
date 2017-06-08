/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3922Component } from './comp-3922.component';

describe('Comp3922Component', () => {
  let component: Comp3922Component;
  let fixture: ComponentFixture<Comp3922Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3922Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

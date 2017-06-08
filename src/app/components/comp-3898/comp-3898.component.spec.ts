/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3898Component } from './comp-3898.component';

describe('Comp3898Component', () => {
  let component: Comp3898Component;
  let fixture: ComponentFixture<Comp3898Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3898Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3898Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

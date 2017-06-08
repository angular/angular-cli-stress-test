/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3355Component } from './comp-3355.component';

describe('Comp3355Component', () => {
  let component: Comp3355Component;
  let fixture: ComponentFixture<Comp3355Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3355Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

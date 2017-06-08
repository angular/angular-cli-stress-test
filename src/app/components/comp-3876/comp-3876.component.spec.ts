/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3876Component } from './comp-3876.component';

describe('Comp3876Component', () => {
  let component: Comp3876Component;
  let fixture: ComponentFixture<Comp3876Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3876Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

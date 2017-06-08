/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp601Component } from './comp-601.component';

describe('Comp601Component', () => {
  let component: Comp601Component;
  let fixture: ComponentFixture<Comp601Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp601Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

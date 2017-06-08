/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3851Component } from './comp-3851.component';

describe('Comp3851Component', () => {
  let component: Comp3851Component;
  let fixture: ComponentFixture<Comp3851Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3851Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3851Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

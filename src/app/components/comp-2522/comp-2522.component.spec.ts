/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2522Component } from './comp-2522.component';

describe('Comp2522Component', () => {
  let component: Comp2522Component;
  let fixture: ComponentFixture<Comp2522Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2522Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

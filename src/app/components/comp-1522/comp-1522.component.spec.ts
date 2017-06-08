/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1522Component } from './comp-1522.component';

describe('Comp1522Component', () => {
  let component: Comp1522Component;
  let fixture: ComponentFixture<Comp1522Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1522Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

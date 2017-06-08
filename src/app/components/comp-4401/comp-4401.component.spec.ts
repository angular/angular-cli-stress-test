/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4401Component } from './comp-4401.component';

describe('Comp4401Component', () => {
  let component: Comp4401Component;
  let fixture: ComponentFixture<Comp4401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

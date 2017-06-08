/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1363Component } from './comp-1363.component';

describe('Comp1363Component', () => {
  let component: Comp1363Component;
  let fixture: ComponentFixture<Comp1363Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1363Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

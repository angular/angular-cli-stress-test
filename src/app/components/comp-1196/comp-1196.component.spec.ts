/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1196Component } from './comp-1196.component';

describe('Comp1196Component', () => {
  let component: Comp1196Component;
  let fixture: ComponentFixture<Comp1196Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1196Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

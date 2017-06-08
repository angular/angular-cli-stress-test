/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1329Component } from './comp-1329.component';

describe('Comp1329Component', () => {
  let component: Comp1329Component;
  let fixture: ComponentFixture<Comp1329Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1329Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

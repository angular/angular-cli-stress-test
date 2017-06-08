/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4404Component } from './comp-4404.component';

describe('Comp4404Component', () => {
  let component: Comp4404Component;
  let fixture: ComponentFixture<Comp4404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

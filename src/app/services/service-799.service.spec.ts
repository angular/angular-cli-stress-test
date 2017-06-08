/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service799Service } from './service-799.service';

describe('Service799Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service799Service]
    });
  });

  it('should ...', inject([Service799Service], (service: Service799Service) => {
    expect(service).toBeTruthy();
  }));
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service7Service } from './service-7.service';

describe('Service7Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service7Service]
    });
  });

  it('should ...', inject([Service7Service], (service: Service7Service) => {
    expect(service).toBeTruthy();
  }));
});

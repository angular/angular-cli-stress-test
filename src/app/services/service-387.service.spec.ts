/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service387Service } from './service-387.service';

describe('Service387Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service387Service]
    });
  });

  it('should ...', inject([Service387Service], (service: Service387Service) => {
    expect(service).toBeTruthy();
  }));
});

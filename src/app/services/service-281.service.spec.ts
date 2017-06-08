/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service281Service } from './service-281.service';

describe('Service281Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service281Service]
    });
  });

  it('should ...', inject([Service281Service], (service: Service281Service) => {
    expect(service).toBeTruthy();
  }));
});
